# div

{% craftml %}
<div>
  <cube repeat="5"/>
  Hello
</div>
{% endcraftml %}


## div style

Set the width of the `div` element to 50.

{% craftml %}
<div style="width: 50;">
  <cube repeat="5"/>
  Hello
</div>
{% endcraftml %}

Aligning contents to the right

{% craftml %}
<div style="width: 50; text-align:right; ">
  <cube repeat="5"/>
  Hello
</div>
{% endcraftml %}

Aligning contents to the center

{% craftml %}
<div style="width: 50; text-align:center; ">
  <cube repeat="5"/>
  Hello
</div>
{% endcraftml %}
