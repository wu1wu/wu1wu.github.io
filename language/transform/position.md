# position

{{'position' | t}} changes the origin of a solid

{% craftml %}
<!-- by default, a cube's origin is at (0,0,0) -->
<cube color="yellow"/>

<!-- position at (15,5,0) -->
<cube t="position 15 5 0" color="blue"/>

<!-- position at y = 30, keeping y and z the same -->
<cube t="position y 30" color="green"/>
{% endcraftml %}
