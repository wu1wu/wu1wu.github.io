# g

{{ 'g' | tag}} creates a group structure so that all the children objects
can be treated as a single unit that can be transformed, copied, cut ... etc.

In this example, a group of three cubes is created. A {{ 'translate' | t}}
command is applied to the group to move all three of them together
by 40 along the _x_ axis.

{% craftml %}
<g t="translate x 40">
  <cube color="pink"/>
  <cube color="red"/>
  <cube color="darkred"/>
</g>
{% endcraftml %}
