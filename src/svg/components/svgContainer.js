export class SvgContainer {

  constructor(config) {
    this._config = config;
    this.svg = this._initializeSvgContainer(config);
    this.components = Array();
  }

  _initializeSvgContainer(config) {
    var margin = config.margin
      , selector = config.selector
      , width = config.width + margin.left + margin.right
      , height = config.height + margin.top + margin.bottom;

    var svg = d3
      .select(selector)
      .append('svg:svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('class', 'chartContainer')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    return svg;
  }


  add(component, render = true) {
    this.components.push(component);

    if (render) {
      component.render(this.svg, this._config);
    }
    return this;
  }

  transform(translation) {
    this.svg.attr('transform', translation);

  }
}