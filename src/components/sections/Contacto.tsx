import { CircleAlert, CircleCheck, Clock, ExternalLink, RotateCcw, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { CONTACT_CONFIG } from "../../config/contact";
import { Button } from "../ui/Button";

type Status = "idle" | "success" | "error";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.488-8.414z" />
    </svg>
  );
}

const inputStyles =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500";

const labelStyles = "mb-1.5 block text-sm font-semibold text-zinc-700 dark:text-zinc-200";

export function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    try {
      const formattedMessage = CONTACT_CONFIG.formatFormMessage({
        name,
        email,
        message,
      });

      const url = CONTACT_CONFIG.buildWhatsAppUrl(formattedMessage);
      setWhatsappUrl(url);
      setStatus("success");

      // Intento de apertura directa de WhatsApp en nueva pestaña
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setName("");
    setEmail("");
    setMessage("");
    setWhatsappUrl("");
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-zinc-200/70 bg-white/60 dark:border-zinc-800 dark:bg-white/[0.02]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
            Contacto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            Cuéntanos sobre tu proyecto y recibe una propuesta a la medida.
          </p>
          <ul className="mt-5 space-y-3 sm:mt-6">
            <li className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Respondemos en menos de 24 horas.
            </li>
            <li className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
              <ShieldCheck className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Sin compromiso: cotización clara y honesta.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-900/5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/60 dark:shadow-black/40">
          {status === "success" ? (
            <div role="status" aria-live="polite" className="py-6 text-center">
              <CircleCheck className="mx-auto h-12 w-12 text-[#128C7E]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                ¡Conversación lista en WhatsApp!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
                Se ha generado el mensaje con los datos de tu consulta. Si la ventana de WhatsApp no
                se abrió automáticamente, puedes abrirla con el botón de abajo:
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Abrir chat de WhatsApp
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  className="border border-zinc-300 dark:border-zinc-700"
                  onClick={handleReset}
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Enviar otro mensaje
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className={labelStyles}>
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelStyles}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    placeholder="tucorreo@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelStyles}>
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    placeholder="Cuéntanos qué quieres construir: objetivos, plazos, referencias…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputStyles} resize-y`}
                  />
                </div>
              </div>

              <div aria-live="polite" className="min-h-6">
                {status === "error" ? (
                  <p role="alert" className="mt-3 flex items-center gap-2 text-sm text-brand-red">
                    <CircleAlert className="h-4 w-4" aria-hidden="true" />
                    Por favor, completa todos los campos requeridos antes de continuar.
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                className="mt-2 w-full px-6 py-3 text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Continuar en WhatsApp
              </Button>
              <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
                Al hacer clic se abrirá WhatsApp con el mensaje estructurado listo para enviar.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
