import { LOGO_URL, SITE_NAME } from '@/lib/config'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src={LOGO_URL} alt={SITE_NAME} loading="eager" decoding="async" />
            <div className="brand-text">
              <span className="brand-name">{SITE_NAME}</span>
              <span className="brand-tag">فكرتك تستاهل تتسمع</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
