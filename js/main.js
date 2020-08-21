document.addEventListener("DOMContentLoaded", function () {
  const svg = d3.select('#svg');
  let moving = false;
  let prev_cords = [];
  let font = 10;
  let color = "green";
  document.querySelector("#colors-list").onchange = function(event) {
    color = event.target.value;
  }
  document.querySelector("#fonts-list").onchange = function(event) {
    font = event.target.value;
  }
  document.querySelector("#form").onsubmit = function() {
    svg.selectAll("svg > *").remove();
    return false;
  }

// const c = svg.append("circle").attr("cx", 200).attr("cy", 200).attr("r", 50).style("fill", 'green');

  // c.transition().duration(1000).attr("cx", 400).delay(1000).style("fill", 'blue');

  // c.on("click", function () {
  //   d3.select(this).transition().duration(1000).style("fill", '#8d8dbe');
  // })

   function draw() {
     if (!moving) return;
       const cords = d3.mouse(this);
      svg.append("circle").attr("r", font).attr("cx", cords[0]).attr("cy", cords[1]).style("fill", color);
     svg.append("line").attr("x1",300)
       .attr("y1", prev_cords[1])
       .attr('x1', prev_cords[0])
       .attr("y2", cords[1])
       .attr('x2', cords[0])
       .attr("stroke-width", (font*2))
       .attr("stroke", color);
     prev_cords = cords;
  }

  svg.on("mousemove", draw)
  svg.on("mousedown", function () {
    prev_cords = d3.mouse(this);
    moving = true;
  });
  svg.on("mouseup", function () {
    moving = false;
  });
})

