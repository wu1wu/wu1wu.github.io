# center

`center` centers an object at a specific location along all or selective dimensions

{% craftml %}

<!-- default -->
<cube color="yellow"/>

<!-- centers at (20,30,5) -->
<cube t="center 20 30 5" color="green"/>

<!-- centers at x=20, ignoring y, z -->
<cube t="center x 20" color="blue"/>

<!-- centers at y=30, ignoring x, z -->
<cube t="center y 30" color="red"/>

{% endcraftml %}
