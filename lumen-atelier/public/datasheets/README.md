Place product datasheet PDF files in this folder.

Default naming rule used by the app:
- /datasheets/<product-slug>.pdf

Examples:
- /datasheets/bollard-light1.pdf
- /datasheets/street-light1.pdf

Optional override:
- In src/data/products.js, set product-level datasheet fields.

Single custom file per product:
- datasheet: "/datasheets/custom/my-bollard-sheet-v2.pdf"

Multiple files per product:
- datasheets: [
		"/datasheets/bollard-spec.pdf",
		"/datasheets/bollard-installation.pdf"
	]

Multiple files with custom button labels:
- datasheets: [
		{ label: "Download Spec Sheet", url: "/datasheets/bollard-spec.pdf" },
		{ label: "Download Installation Guide", url: "/datasheets/bollard-installation.pdf" }
	]
