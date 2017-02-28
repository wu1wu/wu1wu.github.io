# scale

{{'scale' | t}} scales a solid by given scaling factors

{% craftml %}
<row>

<!-- by default, a cube is 10x10x10 -->
<cube color="yellow"/>

<!-- scale it by 3 along all dimensions -->
<cube t="scale 3" color="blue"/>

<!-- scale it by 3 in only y dimension-->
<cube t="scale y 3" color="green"/>

<!-- scale it by 3 in x and y dimensions -->
<cube t="scale xy 3" color="red"/>

</row>
{% endcraftml %}
