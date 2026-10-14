import { CircleAlert, CircleCheck, Clock, LoaderCircle, Send, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "../ui/Button";

type Status = "idle" | "sending" | "success" | "error";

const inputStyles =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500";

const labelStyles = "mb-1.5 block text-sm font-semibold text-zinc-700 dark:text-zinc-200";

export function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    timer.current = window.setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  }

  function handleRetry() {
    setStatus("idle");
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-zinc-200/70 bg-zinc-50/70 dark:border-zinc-800 dark:bg-white/[0.02]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
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
          <ul className="mt-6 space-y-3">
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
            <div role="status" aria-live="polite" className="py-8 text-center">
              <CircleCheck className="mx-auto h-12 w-12 text-emerald-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                ¡Mensaje enviado!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
                Gracias por escribirnos. Te contactaremos en menos de 24 horas
                con tu propuesta a medida. (Envío simulado, sin backend por ahora.)
              </p>
              <Button variant="ghost" className="mt-6 border border-zinc-300 dark:border-zinc-700" onClick={handleRetry}>
                Enviar otro mensaje
              </Button>
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
                    disabled={status === "sending"}
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
                    disabled={status === "sending"}
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
                    disabled={status === "sending"}
                    className={`${inputStyles} resize-y`}
                  />
                </div>
              </div>

              <div aria-live="polite" className="min-h-6">
                {status === "error" ? (
                  <p role="alert" className="mt-3 flex items-center gap-2 text-sm text-brand-red">
                    <CircleAlert className="h-4 w-4" aria-hidden="true" />
                    Algo salió mal al enviar. Inténtalo de nuevo.
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === "sending"}
                className="mt-2 w-full px-6 py-3 text-base disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Enviar mensaje
                  </>
                )}
              </Button>
              <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-500">
                Al enviar aceptas ser contactado sobre tu proyecto. Sin spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
