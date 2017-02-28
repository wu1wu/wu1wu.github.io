# font-style

{{ 'font-style' | attr}} specifies the font style for a 3D text.

* `normal`: use a normal font style. This is default.
* `italic`: use an italic font style.

{% craftml %}
<col spacing="5">

<div style="color: red;">
  Normal
</div>

<div style="font-style: italic; color: blue;">
  Italic
</div>

</col>
{% endcraftml %}
