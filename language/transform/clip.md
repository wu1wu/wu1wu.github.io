# clip

{{'clip' | t}} clips an object to keep only portions that are within the boundaries
of selected objects.

Consider the example below. There is a row of blue bars ({{ 'cube' | tag}})
and a red disk ({{ 'cylinder' | tag}}). The red disk's {{ 'opacity' | attr }}
is set to 0.8 to make it easy to see how the blue bars run through the
red disk.

{% craftml %}
<!-- before clip -->
<g l="center xy">

  <cylinder t="scale 1.5; size z 4"
    style="color:red; opacity: 0.8;"/>

  <row spacing="1" style="color:blue;">
    <cube repeat="10" size="1 20 2"/>
  </row>

</g>
{% endcraftml %}

Suppose we wish to clip this object to the red disk. We add `t="clip cylinder"`
to select the red disk to clip to, which gives us the following:

{% craftml %}
<row spacing="10">
<!-- after clip -->
<g l="center xy" t="clip cylinder">

  <cylinder t="scale 1.5; size z 4"
    style="color:red; opacity: 0.8;"/>

  <row spacing="1" style="color:blue;">
    <cube repeat="10" size="1 20 2"/>
  </row>

</g>
{% endcraftml %}

Note that {{ 'clip' | tag }} and {{ 'cut' | tag }} work similarly in that both
can be used to remove unwanted portions of an object. {{ 'clip' | tag}} removes
parts that are  _outside_  selected objects, whereas {{ 'cut' | tag}} removes parts
that are _inside_ selected objects.
