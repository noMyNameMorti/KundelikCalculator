
function mainfunc(forma){
   var fo_max = Number(forma.fo_col.value);
   var sor_1 = Number(forma.sor_1.value);
   var max_sor_1 = Number(forma.max_sor_1.value);
   
   var sor_2 = Number(forma.sor_2.value);
   var max_sor_2 = Number(forma.max_sor_2.value);
   
   var sor_3 = Number(forma.sor_3.value);
   var max_sor_3 = Number(forma.max_sor_1.value);
   
   var coch = Number(forma.coch.value);
   var max_coch = Number(forma.max_coch.value);
   
   var fo = Number(forma.fo.value);
   
   var gradeItog = document.getElementById("grade_itog");
   
   if(sor_1 > max_sor_1 || sor_2 > max_sor_2 || sor_3 > max_sor_3 || coch > max_coch){
      alert("Вы не правильно ввели данные")
      return true;
   } 
   fo_max =fo_max*10;

   
   var action_1 = 0;
   var action_2 = 0;
   var action_3 = 0;
   var action_4 = 0;
   var action_5 = 0;
   var action_6 = 0;
   var summa_7 = 0;
   
   action_1 = sor_1 + sor_2 + sor_3 + fo;
   console.log("Action 1 - " + action_1);
   action_2 = max_sor_1 + max_sor_2 + max_sor_3 + fo_max;
   console.log("Action 2 - " + action_2);
   action_3 = action_1 / action_2;
   console.log("Action 3 - " + action_3);
   action_4 = action_3 * 50;
   console.log("Action 4 - " + action_4);
   action_5 = coch / max_coch;
   console.log("Action 5 - " + action_5);
   action_6 = action_5 * 50;
   console.log("Action 6 - " + action_6);
   summa_7 = action_4 + action_6;
   console.log("Summa - " + summa_7);
   summa_7=Math.round(summa_7);
   if(summa_7 >=0 && summa_7 <=39){
      console.log("Два");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Неудовлетворительно - 2 ";
      gradeItog.style.display = "block";
      gradeItog.style.color = "#b00006";
      gradeItog.style.border = "15px solid #b00006";
      gradeItog.textContent = "2";
   } if(summa_7 >=40 && summa_7 <=64){
      console.log("Три");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Удовлетворительно - 3 ";
      gradeItog.style.display = "block";
      gradeItog.textContent = "3";
      gradeItog.style.color = "#fcba03";
      gradeItog.style.border = "15px solid #fcba03";
   }if(summa_7 >=65 && summa_7 <=84){
      console.log("Четыре");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Хорошо - 4 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "4";
      gradeItog.style.color = "#3bba00";
      gradeItog.style.border = "15px solid #3bba00";
      
      
   }if(summa_7 >=85 && summa_7 <=100){
      summa_7=summa_7+ "%";
      console.log("Пять");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Отлично - 5";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "5"
      gradeItog.style.color = "#23eb00";
      gradeItog.style.border = "15px solid #23eb00";
      
      
   }
   return false;
}

//   Функция 2

function mainfunc2(forma){
   var fo_max = Number(forma.fo_col.value);
   var sor_1 = Number(forma.sor_1.value);
   var max_sor_1 = Number(forma.max_sor_1.value);
   
   var sor_2 = Number(forma.sor_2.value);
   var max_sor_2 = Number(forma.max_sor_2.value);
   
   var coch = Number(forma.coch.value);
   var max_coch = Number(forma.max_coch.value);
   
   var gradeItog = document.getElementById("grade_itog");

   var fo = Number(forma.fo.value);
   
   if(sor_1 > max_sor_1 || sor_2 > max_sor_2 || coch > max_coch){
      alert("Вы не правильно ввели данные");
      return true;
   } 
   fo_max =fo_max*10;   
   
   var action_1 = 0;
   var action_2 = 0;
   var action_3 = 0;
   var action_4 = 0;
   var action_5 = 0;
   var action_6 = 0;
   var summa_7 = 0;
   action_1 = sor_1 + sor_2 + fo;
   console.log("Action 1 - " + action_1);
   
   action_2 = max_sor_1 + max_sor_2 + fo_max;
   console.log("Action 2 - " + action_2);
   action_3 = action_1 / action_2;
   console.log("Action 3 - " + action_3);
   action_4 = action_3 * 50;
   console.log("Action 4 - " + action_4);
   action_5 = coch / max_coch;
   console.log("Action 5 - " + action_5);
   action_6 = action_5 * 50;
   console.log("Action 6 - " + action_6);
   summa_7 = action_4 + action_6;
   console.log("Summa - " + summa_7);
   summa_7=Math.round(summa_7);
   
   if(summa_7 >=0 && summa_7 <=39){
      summa_7=summa_7+ "%";
      console.log("Два");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Неудовлетворительно - 2 ";
      
      gradeItog.style.display = "block";
      gradeItog.style.color = "#b00006";
      gradeItog.style.border = "15px solid #b00006";
      gradeItog.textContent = "2";
      
   } if(summa_7 >=40 && summa_7 <=64){
      summa_7=summa_7+ "%";
      console.log("Три");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Удовлетворительно - 3 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "3";
      gradeItog.style.color = "#fcba03";
      gradeItog.style.border = "15px solid #fcba03";
      
   }if(summa_7 >=65 && summa_7 <=84){
      console.log("Четыре");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Хорошо - 4 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "4";
      gradeItog.style.color = "#3bba00";
      gradeItog.style.border = "15px solid #3bba00";
      
   }if(summa_7 >=85 && summa_7 <=100){
      console.log("Пять");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Отлично - 5 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "5";
      gradeItog.style.color = "#23eb00";
      gradeItog.style.border = "15px solid #23eb00";
      
   }
   return false;
}

function mainfunc3(forma){
   var fo_max = Number(forma.fo_col.value);
   var sor_1 = Number(forma.sor_1.value);
   var max_sor_1 = Number(forma.max_sor_1.value);
   
   var coch = Number(forma.coch.value);
   var max_coch = Number(forma.max_coch.value);
   
   var gradeItog = document.getElementById("grade_itog");

   
   var fo = Number(forma.fo.value);
   
   if(sor_1 > max_sor_1 || coch > max_coch){
      alert("Вы не правильно ввели данные");
      return true;
   } 
   
   fo_max =fo_max*10;
   
   var action_1 = 0;
   var action_2 = 0;
   var action_3 = 0;
   var action_4 = 0;
   var action_5 = 0;
   var action_6 = 0;
   var summa_7 = 0;
   action_1 = sor_1 + fo;
   console.log("Action 1 - " + action_1);
   
   action_2 = max_sor_1 + fo_max;
   console.log("Action 2 - " + action_2);
   action_3 = action_1 / action_2;
   console.log("Action 3 - " + action_3);
   action_4 = action_3 * 50;
   console.log("Action 4 - " + action_4);
   action_5 = coch / max_coch;
   console.log("Action 5 - " + action_5);
   action_6 = action_5 * 50;
   console.log("Action 6 - " + action_6);
   summa_7 = action_4 + action_6;
   console.log("Summa - " + summa_7);
   summa_7=Math.round(summa_7);
   
   if(summa_7 >=0 && summa_7 <=39){
      summa_7=summa_7+ "%";
      console.log("Два");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Неудовлетворительно - 2 ";
      
      gradeItog.style.display = "block";
      gradeItog.style.color = "#b00006";
      gradeItog.style.border = "15px solid #b00006";
      gradeItog.textContent = "2";
      
   } if(summa_7 >=40 && summa_7 <=64){
      summa_7=summa_7+ "%";
      console.log("Три");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Удовлетворительно - 3 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "3";
      gradeItog.style.color = "#fcba03";
      gradeItog.style.border = "15px solid #fcba03";
      
   }if(summa_7 >=65 && summa_7 <=84){
      console.log("Четыре");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Хорошо - 4 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "4";
      gradeItog.style.color = "#3bba00";
      gradeItog.style.border = "15px solid #3bba00";
      
   }if(summa_7 >=85 && summa_7 <=100){
      console.log("Пять");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Отлично - 5 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "5";
      gradeItog.style.color = "#23eb00";
      gradeItog.style.border = "15px solid #23eb00";
      
   }
   return false;
}







function mainfunc4(forma){
   var fo_max = Number(forma.fo_col.value);
   var sor_1 = Number(forma.sor_1.value);
   var max_sor_1 = Number(forma.max_sor_1.value);
   var sor_2 = Number(forma.sor_2.value);
   var max_sor_2 = Number(forma.max_sor_2.value);
   var sor_1_2 = Number(forma.sor_1_2.value);
   var max_sor_1_2 =Number(forma.max_sor_1_2.value);
   var sor_2_2 = Number(forma.sor_2_2.value);
   var max_sor_2_2 = Number(forma.max_sor_2_2.value);


   var gradeItog = document.getElementById("grade_itog");

   
   var fo = Number(forma.fo.value);
   
   if(sor_1 > max_sor_1 ||sor_2 > max_sor_2){
      alert("Вы не правильно ввели данные");
      return true;
   } 
   
   fo_max =fo_max*10;
   
   var action_1 = 0;
   var action_2 = 0;
   var action_3 = 0;
   var action_4 = 0;
   var summa_7 = 0;
   
   action_1 = sor_1 + sor_2 +sor_1_2 + sor_2_2 + fo;
   console.log("Action 1 - " + action_1);
   
   action_2 = max_sor_1 + max_sor_2 + max_sor_1_2 + max_sor_2_2+ fo_max;
   console.log("Action 2 - " + action_2);
   action_3 = action_1 / action_2;
   console.log("Action 3 - " + action_3);
   action_4 = action_3 * 100;
   console.log("Action 4 - " + action_4);
   summa_7 = action_4;
   console.log("Summa - " + summa_7);
   summa_7=Math.round(summa_7);
   
   if(summa_7 >=0 && summa_7 <=39){
      summa_7=summa_7+ "%";
      console.log("Два");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Неудовлетворительно - 2 ";
      
      gradeItog.style.display = "block";
      gradeItog.style.color = "#b00006";
      gradeItog.style.border = "15px solid #b00006";
      gradeItog.textContent = "2";
      
   } if(summa_7 >=40 && summa_7 <=64){
      summa_7=summa_7+ "%";
      console.log("Три");
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Удовлетворительно - 3 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "3";
      gradeItog.style.color = "#fcba03";
      gradeItog.style.border = "15px solid #fcba03";
      
   }if(summa_7 >=65 && summa_7 <=84){
      console.log("Четыре");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Хорошо - 4 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "4";
      gradeItog.style.color = "#3bba00";
      gradeItog.style.border = "15px solid #3bba00";
      
   }if(summa_7 >=85 && summa_7 <=100){
      console.log("Пять");
      summa_7=summa_7+ "%";
      document.getElementById('grade_2').textContent = summa_7;
      document.getElementById('grade_1').textContent = "Отлично - 5 ";
      
      gradeItog.style.display = "block";
      gradeItog.textContent = "5";
      gradeItog.style.color = "#23eb00";
      gradeItog.style.border = "15px solid #23eb00";
      
   }
   return false;
}




















