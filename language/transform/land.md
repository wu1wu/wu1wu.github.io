# land

{{'land' | t}} moves the object so that its bottom sits on the `z=0` plane (i.e., x-y plane).

Consider the following cubes that have been positioned off the ground plane.

{% craftml %}
<cube t="position 0 0 20" color="red"/>
<cube t="position 20 0 -5" color="green"/>
<cube t="position 40 0 -20" color="blue"/>
{% endcraftml %}

By adding `land`, both are now sitting on the ground plane.

{% craftml %}
<cube t="position 0 0 20; land" color="red"/>
<cube t="position 20 0 -5; land" color="green"/>
<cube t="position 40 0 -20; land" color="blue"/>
{% endcraftml %}
