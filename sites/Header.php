<!-- -- Header.html -- -->

<!-- Default dashboard -->
<header class="page_header_area hide_on_mobile">
    <?php
        include './generics/Header_content.html';
    ?>
</header>

<!-- Navigation, for desktop -->
<header class="page_navigation_area hide_on_mobile">
    <?php
        include './generics/Header_content.html';
    ?>
</header>

<!--  -->
<header class="mobile_page_navigation_area hide_on_desktop hide">
    <?php 
        include './generics/Header_content.html';
    ?>
</header>

<div class="hide_on_desktop">
    <div class="menu_button" onclick="overlay_click()">
        <div class="menu_button_icon open-icon">
            <i class="fas fa-bars">
            </i>
        </div>
        <div class="menu_button_icon close-icon">
            <i class="fas fa-times">
            </i>
        </div>
    </div>
</div>