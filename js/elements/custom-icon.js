class CustomIcon extends HTMLElement
{
	constructor()
	{
		super();

		this.attachShadow({mode: 'open'});

		const svg = this.createSVGElement('svg', {
			viewBox: '-244 -852.535 2440 2440'
		});

		const style = document.createElement('style');
		style.textContent = `
:host
{
	all: initial;
	--front: #fff;
	--back:  #000;
	--theme: #60c;
	display: inline-block;
}
svg
{
	display: inline-block;
	height: 100%;
}
path:not([fill])
{
	animation: rainbow 14s linear infinite alternate;
}
@keyframes rainbow
{
	0%		{ fill: violet }
	16.67%	{ fill: indigo }
	33.33%	{ fill: blue }
	50%		{ fill: green }
	66.67%	{ fill: yellow }
	83.33%	{ fill: orange }
	100%	{ fill: red }
}
`;

		svg.append(
			style,
			this.createSVGElement('circle', {
				cx: 976,
				cy: 367.465,
				r: 1220,
				fill: "var(--back)"
			}),
			this.createSVGElement('path', {
				d: 'M 1436.62,603.304L 1493.01,460.705L 1655.83,460.705L 1578.56,244.39L 1675.2,0.000528336L 1952,734.933L 1747.87,734.933L 1700.57,603.304L 1436.62,603.304 Z',
				fill: 'var(--front)'
			}),
			this.createSVGElement('path', {
				d: 'M 1262.47,734.935L 1558.79,0.00156593L 1362.34,0.0025425L 1159.64,474.933L 1015.5,0.00351906L 864.499,0.00351906L 709.731,474.933L 600.585,258.517L 501.812,562.819L 602.096,734.935L 795.427,734.935L 935.284,309.025L 1068.63,734.935L 1262.47,734.935 Z',
			}),
			this.createSVGElement('path', {
				d: 'M 186.476,482.643L 307.479,482.643C 344.133,482.643 376.772,478.552 405.396,470.37L 436.689,373.962L 524.148,104.516C 517.484,93.9535 509.876,83.9667 501.324,74.5569C 456.419,24.852 390.719,0.000406265 304.222,0.000406265L -3.8147e-006,0.000406265L -3.8147e-006,734.933L 186.476,734.933L 186.476,482.643 Z M 346.642,169.079C 364.182,186.732 372.951,210.355 372.951,239.95C 372.951,269.772 365.238,293.424 349.813,310.906C 332.903,330.331 301.766,340.043 256.404,340.043L 186.476,340.043L 186.476,142.598L 256.918,142.598C 299.195,142.598 329.103,151.425 346.642,169.079 Z',
				fill: 'var(--front)'
			})
		);

		this.shadowRoot.append(svg);
	}

	createSVGElement(tag, attributes = {}, namespace = 'http://www.w3.org/2000/svg')
	{
		const element = document.createElementNS(namespace, tag);
		for(const [attribute, value] of Object.entries(attributes))
			element.setAttributeNS(null, attribute, value);
		return element;
	}
}

customElements.define('custom-icon', CustomIcon);