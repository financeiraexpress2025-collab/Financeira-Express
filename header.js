/* ==========================================================
   HEADER - FINANCEIRA EXPRESS
========================================================== */

#header{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    height:90px;

    background:rgba(17,17,17,.96);

    backdrop-filter:blur(12px);

    z-index:1000;

    transition:all .35s ease;

}

#header.scrolled{

    height:80px;

    box-shadow:0 10px 35px rgba(0,0,0,.15);

}

.header-container{

    max-width:1250px;

    height:100%;

    margin:auto;

    padding:0 25px;

    display:flex;

    justify-content:space-between;

    align-items:center;

}

.logo{

    display:flex;

    align-items:center;

}

.logo img{

    height:55px;

    transition:.3s;

}

.logo img:hover{

    transform:scale(1.05);

}

.menu{

    display:flex;

    align-items:center;

    gap:35px;

}

.menu a{

    color:#ffffff;

    font-size:15px;

    font-weight:500;

    transition:.3s;

    position:relative;

}

.menu a::after{

    content:"";

    position:absolute;

    left:0;

    bottom:-6px;

    width:0;

    height:2px;

    background:#D4AF37;

    transition:.3s;

}

.menu a:hover{

    color:#D4AF37;

}

.menu a:hover::after{

    width:100%;

}

.header-button{

    background:#D4AF37;

    color:#111111;

    padding:14px 28px;

    border-radius:40px;

    font-weight:700;

    transition:.3s;

}

.header-button:hover{

    transform:translateY(-3px);

    box-shadow:0 15px 35px rgba(212,175,55,.30);

}

.menu-toggle{

    display:none;

    flex-direction:column;
