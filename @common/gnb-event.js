function onGnbEvent (type) {
  if (type === "nexon") {
    var nexonScript1 = document.createElement("script");
    nexonScript1.src = "https://ssl.nexon.com/s1/global/ngb_head.js";
    document.head.appendChild(nexonScript1);

    var nexonScript2 = document.createElement("script");
    nexonScript2.textContent = "var nexonLogin = false;";
    document.head.appendChild(nexonScript2);


    var nexonScript3 = document.createElement("script");
    nexonScript3.src = "https://ssl.nexon.com/s1/global/ngb_bodystart.js";
    document.head.appendChild(nexonScript3);

    var nexonScript4 = document.createElement("script");
    nexonScript4.textContent = 'var script4 = document.createElement("script"); script4.src = "https://rs.nxfs.nexon.com/common/js/gnb.min.js"; script4.setAttribute("data-name", "GNB"); script4.setAttribute("data-gamecode", "94248"); script4.setAttribute("data-width", "980"); script4.setAttribute("data-ispublicbanner", "false"); script4.setAttribute("data-showpcbangmenu", "false"); document.head.appendChild(script4);';
    document.head.appendChild(nexonScript4);
  }

  if(type === 'stove'){
    var options = {
      wrapper: '.wrapper',
      skin: 'gnb-default-mini',
      widget: {
        gameListAndService: false
      },
      global: {
        useGds: true
      },
      loginMethod: {
        params: {
          inflow_path: 'tr',
          redirect_url: "",
          game_no: '281',
          show_play_button:'Y',
        },
        redirectCurrentPage: false
      },
      onCreatedHeaderElement: function(headerElement) {
        console.log(headerElement);
      }
    };

    var header = new window.cp.Header(options);
    header.render();
  }
}


/** html body 상단에 넣기

 <!--작업 후 제거 하기-->
 <script type="text/javascript" src="../../@common/gnb-event.js"></script>
 <script charset="utf-8" src="https://static-new.gate8.com/sh-6.1.53/cp-header.js"></script>
 <script type="text/javascript" src="https://hangame-images.toastoven.net/hangame/gnb/reform/js/hangame_gnb.js"></script>
 <script type="text/javascript">
 
 // nexon : 넥슨
 // hangame : 한게임
 // stove : 스토브
let gnbName = '';
onGnbEvent(gnbName);
if(gnbName === 'hangame'){
  loadHangameChannelingGNB()
}
</script>
 <!--작업 후 제거 하기-->

*/
