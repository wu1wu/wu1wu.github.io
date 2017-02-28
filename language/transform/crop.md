# crop

{{'crop' | t}} removes a portion of a solid along the specified dimension from the `min`
or `max` side.

{% craftml %}
<row spacing="5">

  <!-- a full sphere -->
  <sphere/>

  <!-- first half is cropped -->
  <sphere t="crop x min 50%;" color="red"/>

  <!-- second half is cropped -->
  <sphere t="crop x max 50%;" color="blue"/>

</row>
{% endcraftml %}
