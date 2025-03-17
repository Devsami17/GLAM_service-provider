"use strict";var options={series:[{data:[{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-04").getTime()]},{x:"Test",y:[new Date("2019-03-04").getTime(),new Date("2019-03-08").getTime()]},{x:"Validation",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()]},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-18").getTime()]}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0},plotOptions:{bar:{horizontal:!0}},colors:["#963b68"],xaxis:{type:"datetime"}},chart=new ApexCharts(document.querySelector("#basic_timeline_chart"),options);chart.render();options={series:[{data:[{x:"Analysis",y:[new Date("2019-02-27").getTime(),new Date("2019-03-04").getTime()],fillColor:"#287F71"},{x:"Design",y:[new Date("2019-03-04").getTime(),new Date("2019-03-08").getTime()],fillColor:"#4a5a6b"},{x:"Coding",y:[new Date("2019-03-07").getTime(),new Date("2019-03-10").getTime()],fillColor:"#27ebb0"},{x:"Testing",y:[new Date("2019-03-08").getTime(),new Date("2019-03-12").getTime()],fillColor:"#c26316"},{x:"Deployment",y:[new Date("2019-03-12").getTime(),new Date("2019-03-17").getTime()],fillColor:"#522c8f"}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0},plotOptions:{bar:{horizontal:!0,distributed:!0,dataLabels:{hideOverflowingLabels:!1}}},dataLabels:{enabled:!0,formatter:function(e,t){var a=t.w.globals.labels[t.dataPointIndex],t=moment(e[0]),t=moment(e[1]).diff(t,"days");return a+": "+t+(1<t?" days":" day")},style:{colors:["#f3f4f5","#fff"]}},xaxis:{type:"datetime"},yaxis:{show:!1},grid:{borderColor:"#f1f1f1",row:{opacity:1}}};(chart=new ApexCharts(document.querySelector("#distributed_timeline_chart"),options)).render();options={series:[{name:"Bob",data:[{x:"Design",y:[new Date("2019-03-05").getTime(),new Date("2019-03-08").getTime()]},{x:"Code",y:[new Date("2019-03-08").getTime(),new Date("2019-03-11").getTime()]},{x:"Test",y:[new Date("2019-03-11").getTime(),new Date("2019-03-16").getTime()]}]},{name:"Joe",data:[{x:"Design",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Code",y:[new Date("2019-03-06").getTime(),new Date("2019-03-09").getTime()]},{x:"Test",y:[new Date("2019-03-10").getTime(),new Date("2019-03-19").getTime()]}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!0,formatter:function(e){var t=moment(e[0]),t=moment(e[1]).diff(t,"days");return t+(1<t?" days":" day")}},fill:{type:"gradient",gradient:{shade:"light",type:"vertical",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},colors:["#287F71","#4a5a6b"],xaxis:{type:"datetime"},legend:{position:"top"}};(chart=new ApexCharts(document.querySelector("#multi_timeline_chart"),options)).render();options={series:[{name:"Bob",data:[{x:"Design",y:[new Date("2019-03-05").getTime(),new Date("2019-03-08").getTime()]},{x:"Code",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Code",y:[new Date("2019-03-05").getTime(),new Date("2019-03-07").getTime()]},{x:"Test",y:[new Date("2019-03-03").getTime(),new Date("2019-03-09").getTime()]},{x:"Test",y:[new Date("2019-03-08").getTime(),new Date("2019-03-11").getTime()]},{x:"Validation",y:[new Date("2019-03-11").getTime(),new Date("2019-03-16").getTime()]},{x:"Design",y:[new Date("2019-03-01").getTime(),new Date("2019-03-03").getTime()]}]},{name:"Joe",data:[{x:"Design",y:[new Date("2019-03-02").getTime(),new Date("2019-03-05").getTime()]},{x:"Test",y:[new Date("2019-03-06").getTime(),new Date("2019-03-16").getTime()],goals:[{name:"Break",value:new Date("2019-03-10").getTime(),strokeColor:"#CD2F2A"}]},{x:"Code",y:[new Date("2019-03-03").getTime(),new Date("2019-03-07").getTime()]},{x:"Deployment",y:[new Date("2019-03-20").getTime(),new Date("2019-03-22").getTime()]},{x:"Design",y:[new Date("2019-03-10").getTime(),new Date("2019-03-16").getTime()]}]},{name:"Dan",data:[{x:"Code",y:[new Date("2019-03-10").getTime(),new Date("2019-03-17").getTime()]},{x:"Validation",y:[new Date("2019-03-05").getTime(),new Date("2019-03-09").getTime()],goals:[{name:"Break",value:new Date("2019-03-07").getTime(),strokeColor:"#CD2F2A"}]}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0},plotOptions:{bar:{horizontal:!0,barHeight:"80%"}},xaxis:{type:"datetime"},stroke:{width:1},colors:["#287F71","#001b2f","#E7366B"],fill:{type:"solid",opacity:.6},legend:{position:"top",horizontalAlign:"left"}};(chart=new ApexCharts(document.querySelector("#advanced_timeline_chart"),options)).render();options={series:[{name:"George Washington",data:[{x:"President",y:[new Date(1789,3,30).getTime(),new Date(1797,2,4).getTime()]}]},{name:"John Adams",data:[{x:"President",y:[new Date(1797,2,4).getTime(),new Date(1801,2,4).getTime()]},{x:"Vice President",y:[new Date(1789,3,21).getTime(),new Date(1797,2,4).getTime()]}]},{name:"Thomas Jefferson",data:[{x:"President",y:[new Date(1801,2,4).getTime(),new Date(1809,2,4).getTime()]},{x:"Vice President",y:[new Date(1797,2,4).getTime(),new Date(1801,2,4).getTime()]},{x:"Secretary of State",y:[new Date(1790,2,22).getTime(),new Date(1793,11,31).getTime()]}]},{name:"Aaron Burr",data:[{x:"Vice President",y:[new Date(1801,2,4).getTime(),new Date(1805,2,4).getTime()]}]},{name:"George Clinton",data:[{x:"Vice President",y:[new Date(1805,2,4).getTime(),new Date(1812,3,20).getTime()]}]},{name:"John Jay",data:[{x:"Secretary of State",y:[new Date(1789,8,25).getTime(),new Date(1790,2,22).getTime()]}]},{name:"Edmund Randolph",data:[{x:"Secretary of State",y:[new Date(1794,0,2).getTime(),new Date(1795,7,20).getTime()]}]},{name:"Timothy Pickering",data:[{x:"Secretary of State",y:[new Date(1795,7,20).getTime(),new Date(1800,4,12).getTime()]}]},{name:"Charles Lee",data:[{x:"Secretary of State",y:[new Date(1800,4,13).getTime(),new Date(1800,5,5).getTime()]}]},{name:"John Marshall",data:[{x:"Secretary of State",y:[new Date(1800,5,13).getTime(),new Date(1801,2,4).getTime()]}]},{name:"Levi Lincoln",data:[{x:"Secretary of State",y:[new Date(1801,2,5).getTime(),new Date(1801,4,1).getTime()]}]},{name:"James Madison",data:[{x:"Secretary of State",y:[new Date(1801,4,2).getTime(),new Date(1809,2,3).getTime()]}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0},plotOptions:{bar:{horizontal:!0,barHeight:"50%",rangeBarGroupRows:!0}},colors:["#287F71","#343a40","#E77636","#522c8f","#db398a","#522c8f","#8D5B4C","#E7366B","#27ebb0","#836ccb","#F46036","#0ab39c","#963b68","#E77636","#01D4FF"],fill:{type:"solid"},xaxis:{type:"datetime"},legend:{position:"right"},tooltip:{custom:function(e){var t=new Date(e.y1).getFullYear(),a=new Date(e.y2).getFullYear(),n=e.ctx.w,i=n.globals.labels[e.dataPointIndex],o=n.config.series[e.seriesIndex].name||"";return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+n.globals.colors[e.seriesIndex]+'">'+(o||"")+'</span></div><div> <span class="category">'+i+' </span> <span class="value start-value">'+t+'</span> <span class="separator">-</span> <span class="value end-value">'+a+"</span></div></div>"}}};(chart=new ApexCharts(document.querySelector("#group_timeline_chart"),options)).render();options={series:[{data:[{x:"Operations",y:[2800,4500]},{x:"Customer Success",y:[3200,4100]},{x:"Engineering",y:[2950,7800]},{x:"Marketing",y:[3e3,4600]},{x:"Product",y:[3500,4100]},{x:"Data Science",y:[4500,6500]},{x:"Sales",y:[4100,5600]}]}],chart:{height:350,type:"rangeBar",parentHeightOffset:0,zoom:{enabled:!1}},colors:["#001b2f","#287F71"],plotOptions:{bar:{horizontal:!0,isDumbbell:!0,dumbbellColors:[["#4a98f5","#001b2f"]]}},title:{text:"Paygap Disparity"},legend:{show:!0,showForSingleSeries:!0,position:"top",horizontalAlign:"left",customLegendItems:["Female","Male"]},fill:{type:"gradient",gradient:{gradientToColors:["#4a98f5"],inverseColors:!1,stops:[0,100]}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}};(chart=new ApexCharts(document.querySelector("#dumbbell_timeline_chart"),options)).render();