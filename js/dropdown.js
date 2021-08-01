$('.dropdown-menu').slideUp(0);
        $(function () {
            $('.dropdown-toggle').click(function(){
                $(this).toggleClass('expanded');
                $(this).parent().find('.dropdown-menu').slideToggle(200);
            });

            $('.dropdown-item').click(function(event){
                event.preventDefault();
                $(this).parent().parent().parent().find('.dropdown-toggle').text($(this).text()).toggleClass('expanded');
                $(this).parent().parent().slideToggle(200);
                
            });

            $('.dropdown-menu input[type=search]').on('input propertychange',(event)=>{
                var filterText = event.currentTarget.value.toUpperCase();
                var dropdownMenu = event.currentTarget.parentElement.parentElement;
                var items = dropdownMenu.getElementsByTagName('a');
                
                console.log(items)

                for(let item of items){
                    if(item.innerText.toUpperCase().includes(filterText))
                    {
                        item.style.display = "";
                    }
                    else {
                        item.style.display = "none";
                    }
                }

            })

        })