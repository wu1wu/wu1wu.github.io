# Primitives

Primitives are the basic units for building 3D models in CraftML.
This page summarizes the 3D, 2D, and 1D primitives that are available. More
details on each primitive are provided in the following pages.

You may wonder why the list of primitives is so small. It is because a key
design philosophy behind CraftML is to keep the core API to the minimal
and provide a fully extensible module system. Often time it is not necessary to
design a model directly from these primitives. There is an
[extensive online library](https://craftml.io/) of reusable, parametric parts others have
already built using these primitives. You may be able to
find the parts you want. Simply import these parts, customize each part
using parameters, and assemble the customized parts to complete your design.

If you really can't find any part that fits your need, you can always build it
from scratch using these primitives. It would be great if you can publish and
share the part you made so that others can use it without having to build their
own!

## 3D
{% craftml %}
<row spacing="5">
  <cube/>
  <cylinder/>
  <sphere/>
  <dome/>
  <prism/>
</row>
{% endcraftml %}

## 2D
{% craftml %}
<row spacing="5">
  <circle/>
  <rectangle/>
  <triangle/>
  <polygon points="0,0 10,0 10,10 5,15 0,10"/>
</row>
{% endcraftml %}

## 1D
{% craftml %}
<point/>
<point x="0" y="10" z="0"/>
<point x="10" y="0" z="0"/>
<point x="10" y="10" z="0"/>
<point x="0" y="0" z="10"/>
<point x="0" y="10" z="10"/>
<point x="10" y="0" z="10"/>
<point x="10" y="10" z="10"/>
{% endcraftml %}
