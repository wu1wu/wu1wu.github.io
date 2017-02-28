# rotate

{{'rotate' | t}} rotates an object along a given dimension by certain degrees. The
rotated object remains centered at the same location.

{% craftml %}
<row spacing="5">

  <dome color="yellow"/>

  <!-- rotate 45 degrees in x -->
  <dome t="rotate x 45" color="red"/>

  <!-- rotate 90 degrees in x -->
  <dome t="rotate x 90" color="blue"/>  

  <!-- rotate 90 degrees in y -->
  <dome t="rotate y 90" color="green"/>  
</row>
{% endcraftml %}
