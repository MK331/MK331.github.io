       !function move(){
            var id = document.getElementById("c2");  //返回对拥有指定 ID 的第一个对象的引用。
            var width = 10;
            var temp = setInterval(go, 100);   //每0.1秒执行一次go函数
            function go(){
                if(width >= 100)
                    clearInterval(temp);     //停止setInterval
                else{ 
                    adasda++;
                    width++;
                    id.style.width = width+'%';    //使进度条百分比增长
                    id.innerHTML = width+'%';      
                }

            }
        }