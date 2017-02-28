# font-weight

{{ 'font-weight' | attr}} specifies the font weight for a 3D text.

* `normal`: use the normal weight of the font. This id default.
* `bold`: use the bold face of the font.

{% craftml %}
<col spacing="5">

<div style="color: red;">
  Normal
</div>

<div style="font-weight: bold; color: blue;">
  Bold
</div>

</col>
{% endcraftml %}
