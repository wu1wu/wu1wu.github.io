# visibility

{{ 'visibility' | attr}} specifies whether or not an element is visible.

Possible property values are:
* `visible` : Default value. The element is visible.
* `hidden` : The element is invisible (but still takes up space).

{% craftml %}
<row style="color: blue">
  <sphere/>
  <sphere style="visibility: hidden"/>
  <sphere/>
  <sphere style="visibility: hidden"/>
  <sphere/>
</row>
<cube size="50 10 2" style="color:red;"/>
{% endcraftml %}
