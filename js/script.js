// Auto Resize Select

$(document).ready(function() {
    $('#resizingSelectTag').change(function(){
       $("#widthTempOption").html($('#resizingSelectTag option:selected').text());
       $(this).width($("#selectTagWidth").width());  
    });
   });
   
// Initialize tool tip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
