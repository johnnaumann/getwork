/**
 * TrustBox shell — edit attributes below to match Trustpilot Business → Integrations → TrustBox.
 * Loader: `tp.widget.sync.bootstrap.min.js` in index.html (after the module entry).
 *
 * Profile: https://www.trustpilot.com/review/www.strathclydedomesticroofing.co.uk
 */
export function renderTrustpilotWidget() {
  return `
    <div
      class="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="54194556b3550309ad296228"
      data-businessunit-id="671f978ec65a99f755dbdc62"
      data-style-height="20px"
      data-style-width="100%"
      data-theme="light"
    >
      <a
        href="https://www.trustpilot.com/review/www.strathclydedomesticroofing.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        >Trustpilot</a>
    </div>
  `;
}
