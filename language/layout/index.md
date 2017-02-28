# layout

A layout command's purpose is to spatially arrange the children of an object.

CraftML provides the following bulit-in layout commands:
* {{ 'align' | l}} aligns all children to the max side or min side of the first child along selected dimensions.
* {{ 'center' | l}} centers all children to the first child along selected dimensions.
* {{ 'adjoin' | l}} puts each child right next to the previous child along selected dimensions.

In the examples below, we compare the effects of {{ 'align' | l}},
{{ 'center' | l}}, and {{ 'adjoin' | l}} as they are applied to a group of
three differently sized cubes.

{% craftml %}
<g>
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="pink"/>
  <cube t="size y 10; position x 40" color="red"/>
</g>
{% endcraftml %}

`l="align y max"` aligns the pink and red cubes to meet at the max side
of the yellow cube (first children) along the y axis.

{% craftml %}
<g l="align y max">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="pink"/>
  <cube t="size y 10; position x 40" color="red"/>
</g>
{% endcraftml %}

`l="center y"` centers the pink and red cubes to the center
of the yellow cube (first children) along the y axis.

{% craftml %}
<g l="center y">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="pink"/>
  <cube t="size y 10; position x 40" color="red"/>
</g>
{% endcraftml %}

`l="adjoin y"` moves the pink and red cubes along the y axis
in such a way that the 2nd adjoins the 1st and the 3rd adjoins
the 2nd, only along the y axis.

{% craftml %}
<g l="adjoin y">
  <cube t="size y 20; position x 0" color="yellow"/>
  <cube t="size y 15; position x 20" color="pink"/>
  <cube t="size y 10; position x 40" color="red"/>
</g>
{% endcraftml %}

Each layout command uses the first child as the reference, anchors it at
the same position, and re-aranges the rest of the children with respect to this first child.
This is why in all the examples above, the yellow cube always remains in the
same place.

In terms of execution order, layout commands are always executed before the transform commands
are executed. In other words, the rendering engine will first attempt to layout
the children of each object, and then apply the transform commands to the object
itself.
