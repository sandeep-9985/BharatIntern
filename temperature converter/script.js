document.getElementById('cel1').onclick = function(){
            
            document.getElementById('cel2').onclick = function(){
                var num = document.getElementById('inp').value;
                document.getElementById('res').innerHTML = num+"°C";
            };
            document.getElementById('far2').onclick = function(){
                var num1 = document.getElementById('inp').value;
                num1 = (num1*9/5)+32;
                document.getElementById('res').innerHTML = num1+"°F";
            };
            document.getElementById('kel2').onclick = function(){
                var num2 = document.getElementById('inp').value;
                document.getElementById('res').innerHTML = (num2+273.15)+"°K";
            };
        };
        document.getElementById('far1').onclick = function(){
            
            document.getElementById('cel2').onclick = function(){
                var num3 = document.getElementById('inp').value;
                num3=(num3-32)*5/9;
                document.getElementById('res').innerHTML = num3+"°C";
            };
            document.getElementById('far2').onclick = function(){
                var num4 = document.getElementById('inp').value;
                document.getElementById('res').innerHTML = num4+"°F";
            };
            document.getElementById('kel2').onclick = function(){
                var num5 = document.getElementById('inp').value;
                num5=(num5-32)*5/9;
                num5=num5+273.15;
                document.getElementById('res').innerHTML = (num5)+"°K";
            };
        };
        document.getElementById('kel1').onclick = function(){
            
            document.getElementById('cel2').onclick = function(){
                var num6 = document.getElementById('inp').value;
                num6=num6-273.15;
                document.getElementById('res').innerHTML = num6+"°C";
            };
            document.getElementById('far2').onclick = function(){
                var num7 = document.getElementById('inp').value;
                num7=num7-273.15;
                num7 = (num7*9/5)+32;
                document.getElementById('res').innerHTML = num7+"°F";
            };
            document.getElementById('kel2').onclick = function(){
                var num8 = document.getElementById('inp').value;
                document.getElementById('res').innerHTML = num8+"°K";
            };
        };
