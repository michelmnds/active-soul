import { mkdir, writeFile } from "node:fs/promises";
import { artData } from "../src/data/artData.js";
import { classData } from "../src/data/classData.js";
import { danceData } from "../src/data/danceData.js";
import { newsData } from "../src/data/newsData.js";
import { servicesData } from "../src/data/servicesData.js";
import { teamData } from "../src/data/teamData.js";

const outputDirectory = new URL("../src/content/", import.meta.url);

const galleries = {
  25: ["HFKxFRt", "YqCGKBH", "4JYgjO1", "9VQfTf1", "MH8ogmf"],
  26: ["jgoM30V", "y2nlrRA", "3j6otcM", "3XeTnwi", "wYA4u30", "Yqi8aet", "w183qy0", "XlHuXK8"],
  30: ["xFwGF67", "pfwIebt", "7QJyLC0", "q1bumCd", "oOQKjkz"],
  31: ["a1hudPx"],
  33: ["gbCwsMY"],
  35: ["YGeorqW", "dTW5fPd", "T4IZ92I", "03CiPAW"],
  36: ["rN3CFXp"],
  37: ["Ma6fzfU", "6gp0x2h", "ZHRDwhB", "pEMXY2b", "b05SfcX", "NYK1lQa", "CORL1Z1", "Gzn41Wt", "k0Fhp3S", "PZq4hLl", "HToxRC7", "NQiHPIv", "XXWafAP", "uhFydvZ"],
  38: ["t4lO6oZ"],
  40: ["SD8HlgT", "ZcbcK5o", "QHuAqMS", "mkEvJJN", "P8ACu9f"],
  41: ["5rgDJmw", "yqqVEfM", "sBNsvqL"],
  42: ["ulv5sAG"],
  43: ["2blaGoG", "Xe5JZFA", "m8TXCGC", "qmf5mmk"],
  46: ["6vSViPz", "W8bipXb", "MybaEes", "8aDinS2"],
  50: ["prqny8j", "TCA1qXU", "ileYkZY", "tSywxxj", "YpzO3wO", "m55Z4Hw", "y8QONBA", "hZvCRxb"],
  63: ["5T4Nwap", "TBuZ5Bi", "nyJ8oEF", "9ZfZQOS", "vVHpIQ7", "EeRLtx2", "9xkZr8P", "V4G4ig8", "gOabIEd", "mIp1Vuh"],
  71: ["YBeZMbN"],
  81: ["LjXVzkV"],
};

const ctas = {
  31: { text: "Faça a sua inscrição", label: "Inscrever", href: "https://docs.google.com/forms/d/e/1FAIpQLSeNEipOHE97kcnXdYoegAOV9P1z0b9Q6dQR3ECR2l4TjQ-gRw/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR0fXaDKvTcZgqGUOHb7HXoHwYNcikRJXLU_QR0-gPWdkEvaYslN5taTo30_aem_AUIchQRoMc3AfHjDbyZfYZq_7dcirWvlU3BZitZWy4YH03NrnqvISIBFv8yOliHv2dqOVKhREeKEBT8OV3BvqBKA" },
  34: { text: "Reviva este momento", label: "Ver fotografias", href: "https://mega.nz/folder/1u1QQACD#4FvfQITQ2U-xgyXuMtcfdQ" },
  48: { text: "Faça a sua inscrição", label: "Inscrever", href: "https://forms.gle/y6RNg1hgaZvAuLrMA" },
  51: { text: "Reviva este momento", label: "Ver fotografias", href: "https://mega.nz/folder/gn8AXJbT#btq0tig8jZKjBg-gU-LmBg" },
  58: { text: "Reviva este momento", label: "Ver fotografias", href: "https://mega.nz/folder/Vn8jjRTC#pXEYLsniZJu2JbicF-Kp5w/folder/E6tlzKIL" },
  64: { text: "Garanta o seu lugar", label: "Comprar bilhete", href: "https://www.clustersenses.com/complexo-dos-sentidos-no-k/" },
  69: { text: "Faça a sua inscrição", label: "Inscrever", href: "https://forms.gle/Vk4Hp8ukXMYVeftt6" },
  70: { text: "Reviva este momento", label: "Ver fotografias", href: "https://throughrubenseyes.pixieset.com/brisamar/" },
  72: { text: "Veja como foi", label: "Ver no Instagram", href: "https://www.instagram.com/reels/DWBlsq4DNX_/" },
  78: { text: "Vagas limitadas", label: "Garantir lugar", href: "https://forms.gle/cY92RAshZrkUkpHVA" },
};

function normalizeUrl(value) {
  return typeof value === "string"
    ? value.replaceAll("https://imgur.com/", "https://i.imgur.com/")
    : value;
}

function normalizeObject(value) {
  if (Array.isArray(value)) return value.map(normalizeObject);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, normalizeObject(child)]),
    );
  }
  return normalizeUrl(value);
}

function toParagraphs(description, rules) {
  let output = "";
  for (const character of description.replace(/<\/?u>/g, "")) {
    const replacement = rules[character];
    output += replacement ?? character;
  }

  return output
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

const rules = {
  news: { ".": ".\n", "!": "!\n", "*": ".", "$": "\n", "|": "!" },
  dances: { ".": ".\n", ";": ";\n", ":": ":\n" },
  classes: { ".": ".\n" },
  arts: { ".": ".\n", ";": ";\n", ":": ":\n", "*": "." },
  services: { ".": ".\n", "*": "\n" },
};

function toIsoDate(date) {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
}

function toEmbed(event) {
  if (!event.link) return undefined;
  if (event.linkType === "YT") {
    return { type: "youtube", src: `https://www.youtube.com/embed/${event.link}` };
  }
  if (event.linkType === "IG") {
    return { type: "instagram", src: event.link };
  }
  if (event.linkType === "FBDesktop" || event.linkType === "FBMobile") {
    return { type: "facebook", src: event.link };
  }
  return undefined;
}

const news = normalizeObject(
  newsData.map((event, index) => {
    const duplicateId = event.id === 71 && index > newsData.findIndex((item) => item.id === 71);
    const id = duplicateId ? 82 : event.id;
    const item = {
      id,
      name: event.name,
      title: event.title,
      date: toIsoDate(event.date),
      schedule: event.schedule,
      description: toParagraphs(event.description, rules.news),
      image: event.image,
    };
    if (galleries[id]) item.images = galleries[id].map((image) => `https://i.imgur.com/${image}.jpg`);
    if (ctas[id]) item.cta = ctas[id];
    const embed = toEmbed(event);
    if (embed) item.embed = embed;
    return item;
  }),
);

const dances = normalizeObject(
  danceData.map((item) => ({
    ...item,
    description: toParagraphs(item.description, rules.dances),
  })),
);

const classes = normalizeObject(
  classData.map((item) => ({
    ...item,
    description: toParagraphs(item.description, rules.classes),
  })),
);

const arts = normalizeObject(
  artData.map((item) => ({
    ...item,
    description: toParagraphs(item.description, rules.arts),
  })),
);

const services = normalizeObject(
  servicesData.map((item) => ({
    ...item,
    ...(item.description
      ? { description: toParagraphs(item.description, rules.services) }
      : {}),
    ...(item.id === 3
      ? {
          images: ["hYIHdMs", "jw3GFps", "QSqI55O", "50s74Ok"].map(
            (image) => `https://i.imgur.com/${image}.png`,
          ),
        }
      : {}),
    ...(item.id === 4
      ? {
          priceNote: "Valores sob consulta",
          paidExtras: [
            "Lanche: sandes, batata frita, pipocas, fruta, bebidas e gelatina",
            "Máquina de bolhas e luzes para um mini clube noturno kids",
            "Mascotes durante 30 minutos",
            "Oficina de adereços para usar na dança",
            "Pinturas faciais",
            "Circuito psicomotor, apenas no Pack Baby",
            "Organização de toda a decoração da festa",
          ],
          terms: [
            "Podem trazer alimentação. O Active Soul disponibiliza gratuitamente a loiça e um local para o bolo de aniversário.",
            "A decoração da sala fica ao critério dos pais. Disponibilizamos duas torres de balões e uma máquina para os encher.",
            "Não é permitida a utilização de confetis.",
            "A marcação depende de confirmação de disponibilidade e reserva prévia.",
            "O pagamento é feito em duas partes: 50% na marcação e 50% até ao dia anterior à festa.",
            "Cancelamentos são aceites até 15 dias antes da festa, com retenção de 15 euros para taxas de cancelamento.",
          ],
        }
      : {}),
  })),
);

const team = normalizeObject(teamData);

const landing = normalizeObject({
  hero: {
    eyebrow: "Dança, bem-estar e artes",
    title: "Ativa o corpo. Solta a alma.",
    description: "Um estúdio em Castelo Branco onde o movimento, a criatividade e a comunidade crescem juntos.",
    image: "https://i.imgur.com/I7JmZ4d.jpg",
  },
  video: {
    title: "Encontra o teu ritmo",
    description: "Conhece o Active Soul e marca uma aula experimental.",
    src: "https://www.youtube.com/embed/70_mQYFayY8",
  },
  whatsapp: "https://wa.me/message/P62IN6OYSZ5YN1",
  tiles: [
    { title: "Dança", subtitle: "Movimento para todas as idades", image: "https://i.imgur.com/I7JmZ4d.jpg", href: "/dancas" },
    { title: "Bem-estar", subtitle: "Força, equilíbrio e energia", image: "https://i.imgur.com/5CNXN7S.jpg", href: "/aulas" },
    { title: "Eventos", subtitle: "O que está a acontecer", image: "https://i.imgur.com/JfVouRR.jpg", href: "/eventos" },
    { title: "Serviços", subtitle: "Experiências feitas à medida", image: "https://i.imgur.com/eMyRUEz.png", href: "/servicos" },
  ],
  timetable: {
    title: "Horário 2025",
    image: "https://i.imgur.com/vQqajeV.jpeg",
    width: 1000,
    height: 707,
  },
  registrationNotice: [
    "Renovações de inscrição até dia 10 de agosto.",
    "Inscrição de novos alunos dia 14 de agosto.",
  ],
});

const site = {
  nav: [
    { label: "Dança", href: "/dancas" },
    { label: "Bem-estar", href: "/aulas" },
    { label: "Artes", href: "/artes" },
    { label: "Eventos", href: "/eventos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Equipa", href: "/equipa" },
    { label: "Sobre", href: "/sobre" },
  ],
  socials: {
    instagram: "https://www.instagram.com/activesoul.studio/",
    facebook: "https://www.facebook.com/activesoulstudio/",
    youtube: "https://www.youtube.com/@studio_activesoul",
    whatsapp: "https://wa.me/message/P62IN6OYSZ5YN1",
  },
  phone: "962 817 248",
  phoneHref: "tel:+351962817248",
  email: "activesoul.studio@gmail.com",
  address: "Estrada do Montalvão 31A, 6000-050 Castelo Branco",
  hours: ["Segunda a sexta: 08h00 às 22h00", "Sábado, domingo e feriados: fechado"],
  mapsUrl: "https://www.google.com/maps/place/Estr.+do+Montalv%C3%A3o+31a,+6000-050+Castelo+Branco/@39.810681,-7.5079257,17z",
};

const about = normalizeObject({
  history: [
    "O Active Soul surge em Castelo Branco em 2022, um espaço onde se pretende potenciar a cultura e o exercício. Um espaço repleto de musicalidade e ritmo que complementa o bem-estar físico, performances, espetáculos e a organização de eventos.",
    "Com uma grande oferta de serviços, estilos de dança, atividades e aulas de grupo e personalizadas, continuamos a fazer mais e melhor, disponibilizando à cidade um espaço de excelência. Todos os caminhos vão dar ao Active Soul.",
  ],
  facilities: [
    { id: "estudio-1", label: "Estúdio 1", image: "https://i.imgur.com/vYcZVjI.jpg" },
    { id: "estudio-2", label: "Estúdio 2", image: "https://i.imgur.com/wRObaTQ.jpg" },
    { id: "estudio-3", label: "Estúdio 3", image: "https://i.imgur.com/Hrv1wXI.jpg" },
    { id: "sala-polivalente", label: "Sala Polivalente", image: "https://i.imgur.com/3zh9r0V.jpg" },
    { id: "sala-brincadeiras", label: "Sala das Brincadeiras", image: "https://i.imgur.com/dsmtorp.jpg" },
  ],
  services: [
    { title: "Aluguer de espaço", description: "Aulas privadas ou de grupo, ensaios e trabalhos comerciais.", icon: "home" },
    { title: "Eventos", description: "Festas de aniversário, workshops e experiências à medida.", icon: "calendar" },
    { title: "Formações", description: "Team building, formações corporativas e encontros de equipa.", icon: "users" },
  ],
  testimonials: [
    { rating: 5, name: "Inês Pitacas", text: "Equipa de profissionais de excelência. Flexibilidade de horários e um ambiente que nos faz sentir em casa." },
    { rating: 5, name: "Isabel Carreira", text: "Não podia ter escolhido melhor sítio para voltar ao exercício físico. Profissionalismo e simpatia de todos." },
    { rating: 5, name: "Selma Esteves", text: "Professoras fantásticas, dedicadas e divertidas, sempre com boa disposição e motivação durante as aulas." },
    { rating: 5, name: "Leonor Miguel Farias", text: "Um estúdio único, cheio de energia e muito acolhedor, com vários estilos de dança." },
    { rating: 5, name: "Patricia Marques", text: "Conseguimos juntar teatro musical à dança e os resultados estão a ser incríveis. Profissionalismo e simpatia." },
    { rating: 5, name: "Julia Senna", text: "Um ótimo lugar, super familiar, onde todos nos recebem com muita simpatia." },
  ],
});

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const expectedCounts = { news: 81, dances: 7, classes: 7, arts: 3, services: 4, team: 12 };
for (const [name, expected] of Object.entries(expectedCounts)) {
  assert(eval(name).length === expected, `${name}: expected ${expected}`);
}
assert(new Set(news.map(({ id }) => id)).size === news.length, "News IDs must be unique");
assert(Object.values(galleries).flat().length === 77, "Gallery total must be 77");
assert(Object.keys(galleries).every((id) => news.some((item) => item.id === Number(id))), "Every gallery event must exist");
assert(Object.keys(ctas).every((id) => news.some((item) => item.id === Number(id))), "Every CTA event must exist");

const generated = { news, dances, classes, arts, services, team, landing, site, about };
const serialized = JSON.stringify(generated);
assert(!serialized.includes("https://imgur.com/"), "Bare imgur.com URLs remain");
for (const collection of [news, dances, classes, arts, services]) {
  const descriptions = collection.flatMap((item) => item.description ?? []).join("");
  assert(!/[*$|]/.test(descriptions), "Description sentinels remain");
}

await mkdir(outputDirectory, { recursive: true });
for (const [name, value] of Object.entries(generated)) {
  const source = `export const ${name} = ${JSON.stringify(value, null, 2)};\n`;
  await writeFile(new URL(`${name}.js`, outputDirectory), source, "utf8");
}

console.log("Content migration complete");
console.table(Object.fromEntries(Object.entries(expectedCounts).map(([name]) => [name, eval(name).length])));
console.log(`Gallery images: ${Object.values(galleries).flat().length}`);
console.log("Paragraph review:", {
  news: news.reduce((total, item) => total + item.description.length, 0),
  dances: dances.reduce((total, item) => total + item.description.length, 0),
  classes: classes.reduce((total, item) => total + item.description.length, 0),
  arts: arts.reduce((total, item) => total + item.description.length, 0),
  services: services.reduce((total, item) => total + (item.description?.length ?? 0), 0),
});
