var id=0;
var total=0;
function sub_total(){
    id++;
    var p_name = document.getElementById("in_name").value;
    var p_qt = document.getElementById("in_qty").value;
    var p_pr = document.getElementById("in_pr").value;
    var sub_total = (p_qt*p_pr);
    total += sub_total;
    var row= "<tr>";
        row += "<td>" + id + "</td>";
        row += "<td>" + p_name + "</td>";
        row += "<td>" + p_qt + "</td>";
        row += "<td>" + p_pr + "</td>";
        row += "<td>" + sub_total + "</td>";
        row += "</tr>";
    document.getElementById("tb").innerHTML+=row;
    document.getElementById("total_p").innerHTML=total;
}
// function total_p(){
//     var totalRow = "<tr>";
//         totalRow += "<td colspan='4'>Total"+"</td>";
//         totalRow += "<td>" + total + "</td>";
//     totalRow += "</tr>";
//     document.getElementById("tb").innerHTML += totalRow;
// }