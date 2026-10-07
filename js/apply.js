(function(){
  const form=document.getElementById("applicationForm");
  if(!form)return;
  const msg=document.getElementById("formMessage");

  function renumber(container, selector){
    container.querySelectorAll(selector).forEach((row,i)=>{
      const n=row.querySelector(".activity-number");
      if(n)n.textContent=i+1;
      const first=row.querySelector("td");
      if(first)first.textContent=i+1;
    });
  }

  document.getElementById("addActivity").addEventListener("click",()=>{
    const box=document.getElementById("activities");
    const row=document.createElement("div");
    row.className="activity-row";
    row.innerHTML='<div class="activity-number"></div><input name="activity_name[]" placeholder="गतिविधिको नाम"><input name="activity_unit[]" placeholder="इकाई"><input type="number" min="0" name="activity_qty[]" placeholder="परिमाण"><input type="number" min="0" name="activity_rate[]" placeholder="दर"><button type="button" class="remove-activity" aria-label="Remove">×</button>';
    box.appendChild(row);
    renumber(box,".activity-row");
  });

  document.getElementById("activities").addEventListener("click",e=>{
    if(e.target.classList.contains("remove-activity")){
      const rows=document.querySelectorAll("#activities .activity-row");
      if(rows.length>1)e.target.closest(".activity-row").remove();
      renumber(document.getElementById("activities"),".activity-row");
    }
  });

  document.getElementById("addCost").addEventListener("click",()=>{
    const tbody=document.getElementById("costRows");
    const tr=document.createElement("tr");
    tr.innerHTML='<td></td><td><input name="cost_activity[]"></td><td><input name="cost_unit[]"></td><td><input type="number" min="0" name="cost_qty[]"></td><td><input type="number" min="0" name="cost_rate[]"></td><td><input type="number" min="0" name="cost_total[]"></td><td><input type="number" min="0" name="msme_investment[]"></td><td><input type="number" min="0" name="rhvap_investment[]"></td>';
    tbody.appendChild(tr);
    renumber(tbody,"tr");
  });

  form.querySelectorAll('input[type="file"]').forEach(input=>{
    input.addEventListener("change",()=>{
      const file=input.files[0];
      if(!file)return;
      const allowed=["application/pdf","image/jpeg","image/png"];
      if(!allowed.includes(file.type)){
        input.value="";
        alert("गलत फाइल प्रकार। JPG, JPEG, PNG वा PDF मात्र छान्नुहोस्।");
      }else if(file.size>2*1024*1024){
        input.value="";
        alert("फाइल 2 MB भन्दा ठूलो हुनु हुँदैन।");
      }
    });
  });

  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    msg.textContent="फारमको frontend test सफल भयो। Google Apps Script backend URL जोडिएपछि यही बटनबाट वास्तविक आवेदन पठाउन सकिन्छ।";
    msg.classList.add("show");
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
  });

  form.addEventListener("reset",()=>msg.classList.remove("show"));
})();