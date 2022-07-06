   <script>
        //  ================================= navbar===============================  

        let country = document.getElementById('country');
        let moving = document.getElementById('moving');
        let text = document.getElementById('text');
        let list = document.getElementById('list');

        country.addEventListener('click', ()=>{
            list.classList.toggle('hidden');
            moving.classList.toggle('roted');
        });

        function myfunction(anyone){
            text.innerHTML = anyone;
        }

        let eng_tag=document.getElementById('eng_tag');
        let hin_eng=document.querySelector('.hin_eng');
        let language=document.querySelector('.language');


        language.addEventListener('click', () =>{
            hin_eng.classList.toggle('display_div');
        });

        function languageolx(anyone){
            eng_tag.innerHTML=anyone;
        }

        let girl_img_id=document.getElementById('girl_img_id');
        let dropdownid=document.getElementById('dropdownid');


        girl_img_id.addEventListener('click', ()=>{
            dropdownid.classList.toggle('block_div')
        })

        let ad_img = document.querySelector('.ad_img');
        let ad_icon = document.getElementById('ad_icon');


        ad_icon.addEventListener('click', () => {
            ad_img.style = `display: none`;
        });
    </script>
