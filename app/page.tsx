import { SiteHeader } from '@/components/site-header'
import { Submissions } from '@/components/submissions'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <div className="bg-image" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />
      <div className="bg-fade-top" aria-hidden="true" />
      <div className="bg-fade-bottom" aria-hidden="true" />

      <SiteHeader />
      <main>
        <div className="container">
          <Submissions />
        </div>
      </main>
      <WhatsAppFloat />
    </>
  )
}
