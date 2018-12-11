<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <meta http-equiv="X-UA-Compatible"
              content="ie=edge">

        <?php
            include './generics/Fonts.html';
            include './generics/Content.html';
            include './generics/Libraries.html';
            include './generics/Style.html';
        ?>

        <title>
            Space Education: Insight
        </title>
    </head>
    
    <body>
        <?php
            include './generics/Header.html';
        ?>
        <main>
            <?php
                include './content/Insight.html';
            ?>
        </main>
        <?php
            include './generics/Footer.html';
        ?>
        <script src="./script/scripts.js"
                onload="select_page('header_insight_link');">
        </script>
        
        <script src="./script/scripts.js"
                onload="use_overlay();">
        </script>
        <script src="./script/scripts.js"
                onload="init();">
        </script>
    </body>
</html>