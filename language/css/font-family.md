# font-family

{{ 'font-family' | attr}} specifies the font used to render 3D text.

All [Google fonts](https://www.google.com/fonts) are available for use.

Some of the popular fonts are:
* [Roboto](https://www.google.com/fonts/specimen/Roboto)
* [Oswald](https://www.google.com/fonts/specimen/Oswald)
* [Lora](https://www.google.com/fonts/specimen/Lora)
* [Raleway](https://www.google.com/fonts/specimen/Raleway)

{% craftml %}
<col spacing="5">

<div style="font-family: Roboto; color: blue;">
  Roboto
</div>

<div style="font-family: Oswald; color: green;">
  Oswald
</div>

<div style="font-family: Lora; color: red;">
  Lora
</div>

<div style="font-family: Raleway; color: cyan;">
  Raleway
</div>

</col>
{% endcraftml %}
