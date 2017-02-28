# size

{{'size' | t}} scales up or down a solid such that its new size will become `x` by `y`
by `z`. If an axis is unspecified, the size along that axis will not change.

{% craftml %}
<row>

<!-- by default, a cube is 10x10x10 -->
<cube color="yellow"/>

<!-- size is changed to y = 50 -->
<cube t="size y 50" color="green"/>

<!-- size is changed to xy = 50 -->
<cube t="size xy 50" color="red"/>

<!-- size is changed to 50 by 50 by 50 -->
<cube t="size 50 50 50" color="blue"/>

</row>
{% endcraftml %}
