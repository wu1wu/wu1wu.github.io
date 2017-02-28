# flip

{{'flip' | t}} flips an object along given axes. After an object is flipped, its center
remains at the same position.

{% craftml %}
<part name="elbow">
  <cube t="size x 20"/>
  <cube t="size z 20; position z 10"/>
</part>

<row spacing="5">
  <elbow color="yellow"/>

  <!-- flip along z -->
  <elbow t="flip z" color="green"/>

  <!-- flip along x -->
  <elbow t="flip x" color="blue"/>

  <!-- flip along xz -->
  <elbow t="flip xz" color="red"/>

</row>
{% endcraftml %}
