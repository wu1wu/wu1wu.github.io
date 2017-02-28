# fit

{{'fit' | t}} scales an object proportionally (perserving aspect ratios) in order
to fit it tightly inside a 3D space of given dimensions. If an object already
fits within the 3D space, no scaling is performed.

{% craftml %}
<part name="box">
  <cube size="30 20 10"/>
</part>

<row>

<!-- a 30x20x10 box -->
<box color="yellow"/>

<!-- fit in a 20x20x20 space -->
<box color="blue" t="fit 20 20 20"/>


<!-- fit in yz within a 5x5 space -->
<box color="red" t="fit yz 5"/>


<!-- fit in a larger space (no effect)-->
<box color="green" t="fit 40 40 40"/>

</row>
{% endcraftml %}
