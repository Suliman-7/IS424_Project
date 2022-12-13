
        
            var edCount=0;
            var exCount=0;
            var lCount=0;
            
            function createTextField() {
                
                if(document.getElementById("input_type").value=="1"){
                    var $node = "<p><br/>"+
                    "Degree: <input type='text' id='degree"+edCount+"' required/> \t"+
                    "Gpa: <input type='text' id='gpa"+edCount+"' pattern='^[0-9]{1}.[0-9]{2}$' required value='0.00' /> \t"+
                    "Institute: <input type='text' id='institute"+edCount+"' required/> \t</p>";
            
                    $('p').last().after($node);
            
                    var degree=document.getElementById("degree"+edCount).value;
                    var gpa=document.getElementById("gpa"+edCount).value;
                    var institute=document.getElementById("institute"+edCount).value;
            
                    edCount++;
                    
                }
                
                else if(document.getElementById("input_type").value=="2"){
                    var $node = "<p><br/>"+
                    "Experience:<br/> <textarea id='textarea"+exCount+"' rows='7' cols='45' required></textarea></p>";
                    $('p').last().after($node);
                    
                    var exp=document.getElementById("textarea"+exCount).value;
                    exCount++;
                }
            
                else if(document.getElementById("input_type").value=="3"){
                    var $node ="<p><br/>Language: <input type='text' id='language"+lCount+"' required></p>";
                    $('p').last().after($node);
                    
                    var lang=document.getElementById("Language"+lCount);
                    lCount++;
                }
            
            
            }
            function create(){
                var child=window.open("", "", "toolbar = no, " + 
                    "menubar = no, scrollBars = no");
                
                var fname=document.getElementById("fname").value;
                var lname=document.getElementById("lname").value;

                child.document.write("<body style='background-color:rgb(253, 245, 245);font-family: Arial, Helvetica, sans-serif;'><h1 style='width:100%; background-color:rgb(252, 221, 184); margin-top:1em;margin-bottom:1em;"+
                    "padding-top:1em;padding-bottom:1em; padding-left:1em'>"+fname+" "+lname+"</h1>");

                var phone=document.getElementById("phone").value;
                var email=document.getElementById("email").value;
                child.document.write("<p style='width:100%; background-color:blanchedalmond; margin-top:1em;margin-bottom:0.4em;"+
                    "padding-top:1em;padding-bottom:1em; padding-left:1em'><strong>Phone: </strong>"+phone+" - "+
                    "<strong>Email: </strong>"+email+"</p><br/>");

                var date=document.getElementById("birthdate").value;
                var gender;
                if(document.getElementById("male").checked){
                    gender="Male";
                }
                else if(document.getElementById("female").checked){
                    gender="Female";
                }
                child.document.write("<p style='width:100%; background-color:blanchedalmond; margin-top:1em;margin-bottom:0.4em;"+
                        "padding-top:1em;padding-bottom:1em; padding-left:1em'><strong>Date of Birth: </strong>"+date+" - "+
                        "<strong>Gender: </strong>"+gender+"</p><br/>")

                if(edCount>0){
                    child.document.write("<br/>");
                    child.document.write("<p style='width:100%; background-color:blanchedalmond; margin-top:1em;margin-bottom:0.4em;"+
                        "padding-top:1em;padding-bottom:1em; padding-left:1em'>");
                        child.document.write("<strong style='font-size:1.5em;'>Education</strong> </br/><br/>")
                    
                    child.document.write("<table style='margin-left:1em;'>");
                    for(var edu=0;edu<edCount;edu++){
                        child.document.write(" <tr><td><strong>"+(edu+1)+") Degree:</strong> "+document.getElementById("degree"+edu).value+"</td></tr>");
                        child.document.write("<tr><td><strong>Gpa:</strong> "+document.getElementById("gpa"+edu).value+"</td></tr>");
                        child.document.write("<tr><td><strong>Institute:</strong> "+document.getElementById("institute"+edu).value+"</td></tr>");
                    }
                    child.document.write("</table></p>");
                }
                if(exCount>0){
                    child.document.write("<br/>");
                    child.document.write("<p style='width:100%; background-color:blanchedalmond; margin-top:1em;margin-bottom:0.4em;"+
                        "padding-top:1em;padding-bottom:1em; padding-left:1em'><strong style='font-size:1.5em;'>Experience</strong></br/><br/>");

                    child.document.write("<table style='margin-left:1em;'>");
                    for(var ex=0;ex<exCount;ex++){
                        child.document.write("<tr><td><strong>"+(ex+1)+")</strong> "+document.getElementById("textarea"+ex).value+"</td></tr>");
                    }
                    child.document.write("</table></p>");
                }
                if(lCount>0){
                    child.document.write("<br/>");
                    child.document.write("<p style='width:100%; background-color:blanchedalmond; margin-top:1em;margin-bottom:1em;"+
                        "padding-top:1em;padding-bottom:1em; padding-left:1em'><strong style='font-size:1.5em;'>Languages</strong></br/><br/>");

                    child.document.write("<table style='margin-left:1em;'>");
                    for(var l=0;l<lCount;l++){
                        child.document.write("<tr><td><strong>"+(l+1)+")</strong> "+document.getElementById("language"+l).value+"</td></tr>");
                    }
                    child.document.write("</table></p>");
                }
                child.document.write("</body>");
            }
    
        