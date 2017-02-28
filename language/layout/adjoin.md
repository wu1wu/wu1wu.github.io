# adjoin

{{ 'adjoin' | l}} puts each child right after the previous child along selected
dimensions so that they are adjoining, while keeping the first child at its
original position. A number can be optionally provided to indicate how much
space to leave between every two objects.

Let's consider a simple case involving two objects, a cube and a sphere. Initially,
they are overlapping; we can only see a cube because of this. After
adding `l="adjoin=x"` to `<g>`, the sphere is moved such that it now adjoins
the cube, no longer overlapping with it.

{% craftml %}
<!-- originally, they are all overlapping -->
<g>
  <cube/>
  <sphere/>
</g>

<!-- both are now adjoining -->
<g l="adjoin x" t="position y 20">
  <cube/>
  <sphere/>
</g>

<!-- spacing = 2 -->
<g l="adjoin x 2" t="position y 40">
  <cube/>
  <sphere/>
</g>

{% endcraftml %}

Let's look at an example with more objects involved. This time,
we have a cube and three spheres forming a group.
Initially, they are all overlapping. By adding `l="adjoin x"` to `<g>`,
they are rearranged into a line along the _x_ axis where each child adjoins
the previous child.

{% craftml %}
<!-- originally, they are all overlapping -->
<g>
  <cube/>
  <sphere/>
  <sphere/>
  <sphere/>
</g>

<!-- each child adjoins the previous child -->
<g l="adjoin x" t="position y 20">
  <cube/>
  <sphere/>
  <sphere/>
  <sphere/>
</g>

<!-- a spacing of 5 is added -->
<g l="adjoin x 5" t="position y 40">
  <cube/>
  <sphere/>
  <sphere/>
  <sphere/>
</g>
{% endcraftml %}
