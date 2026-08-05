import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { site } from "@/content/site";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
};

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="container grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-20">
        <div>
          <img src="/logo-completa.png" alt="Active Soul" className="h-20 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-brand-200">Dança, bem-estar e artes em Castelo Branco. Um espaço para descobrir movimento, expressão e comunidade.</p>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.socials).map(([name, href]) => {
              const Icon = socialIcons[name];
              return (
                <a key={name} href={href} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full border border-brand-700 text-lg text-white transition hover:border-brand-300 hover:bg-brand-800" aria-label={name}>
                  <Icon aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-300">Explorar</h2>
          <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Navegação do rodapé">
            {site.nav.map((item) => <Link key={item.href} to={item.href} className="text-sm text-brand-100 transition hover:text-white">{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-300">Visite-nos</h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-6 text-brand-100">
            <p>{site.address}</p>
            <p><a className="hover:text-white" href={site.phoneHref}>{site.phone}</a></p>
            <p><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-800">
        <div className="container py-5 text-xs text-brand-300">© {new Date().getFullYear()} Active Soul. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
