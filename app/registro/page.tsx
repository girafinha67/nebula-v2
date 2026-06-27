'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AuthLayout } from '@/components/auth/auth-layout'
import { FloatingInput } from '@/components/auth/floating-input'

export default function RegistroPage() {
  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Coloque seu projeto no ar em menos de 60 segundos"
      footer={
        <>
          Já tem uma conta?{' '}
          <Link href="/login" className="text-foreground underline-offset-4 hover:underline">Entrar</Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <FloatingInput label="Nome completo" type="text" autoComplete="name" />
        <FloatingInput label="E-mail" type="email" autoComplete="email" />
        <FloatingInput label="Senha" type="password" autoComplete="new-password" />

        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" className="mt-0.5 size-4 rounded border-border bg-card accent-[var(--accent)]" />
          <span>
            Concordo com os{' '}
            <Link href="/termos" className="text-foreground underline-offset-4 hover:underline">Termos de Serviço</Link>{' '}
            e a{' '}
            <Link href="/privacidade" className="text-foreground underline-offset-4 hover:underline">Política de Privacidade</Link>.
          </span>
        </label>

        <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
          Criar conta grátis
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>
    </AuthLayout>
  )
}
