---
title: System info
---
# {{ page.title }}

## Site.url
{{ site.url }}

## Site.time
{{ site.time }}

## Site.github
{{ site.github | jsonify }}

<script>
  window.GITHUB = {{ site.github | jsonify }};
  console.log(window.GITHUB);
</script>

## Site.categories (TODO: create category-content page)
<nav class="">
    <ul>
      {% for category in site.categories %}
        <li>
            {{ category[0] }} ({{ category[1].size }})
        </li>
      {% endfor %}
    </ul>
</nav>


## Site.tags (TODO: create tag-content page)
<nav class="">
    <ul>
      {% for tag in site.tags %}
        <li>
            {{ tag[0] }} ({{ tag[1].size }})
        </li>
      {% endfor %}
    </ul>
</nav>


## Site.collections (TODO: create collection-content page)
<nav class="">
    <ul>
      {% for collection in site.collections %}
        <li>
            {{ collection.label }} ({{ collection.relative_directory }})
        </li>
      {% endfor %}
    </ul>
</nav>

## Site.pages
<nav class="">
    <ul>
      {% for page in site.pages %}
        <li>
            <a 
                href="{{ page.url }}"
                class="link">
                {{ page.title }}
            </a> ({{ page.path }})
        </li>
      {% endfor %}
    </ul>
</nav>


## Site.documents
<nav class="">
    <ul>
      {% for document in site.documents %}
        <li>
            <a 
                href="{{ document.url }}"
                class="link">
                {{ document.title }}
            </a>
        </li>
      {% endfor %}
    </ul>
</nav>


## Site.posts
<nav class="">
    <ul>
      {% for post in site.posts %}
        <li>
            <a 
                href="{{ post.url }}"
                class="link">
                {{ post.title }}
            </a>
        </li>
      {% endfor %}
    </ul>
</nav>


## Site.related Posts
<nav class="">
    <ul>
      {% for post in site.related_posts %}
        <li>
            <a 
                href="{{ post.url }}"
                class="link">
                {{ post.title }}
            </a>
        </li>
      {% endfor %}
    </ul>
</nav>

## Site.static_files
<nav class="">
    <ul>
      {% for file in site.static_files %}
        <li>
            <a 
                href="{{ file.path }}"
                class="link">
                {{ file.name }}
            </a> ({{ file.path }}, {{file.modified_time | date_to_long_rfc822 }})
        </li>
      {% endfor %}
    </ul>
</nav>

## Site.html_pages
<nav class="">
    <ul>
      {% for page in site.html_pages %}
        <li>
            <a 
                href="{{ page.url }}"
                class="link">
                {{ page.title }}
            </a> ({{ page.path }})
        </li>
      {% endfor %}
    </ul>
</nav>

## Site.html_files
<nav class="">
    <ul>
      {% for file in site.html_files %}
        <li>
            <a 
                href="{{ file.url }}"
                class="link">
                {{ file.name }} {{ file.title }}
            </a> ({{ file.path }})
        </li>
      {% endfor %}
    </ul>
</nav>

==========================

## Page.id
{{ page.id }}

## Page.url
{{ page.url }}

## Page.title
{{ page.title }}

## Page.date
{{ page.date }}

## Page.categories
{{ page.categories }}

## Page.collection
{{ page.collection }}

## Page.tags
{{ page.tags }}

## Page.dir
{{ page.dir }}

## Page.name
{{ page.name }}

## Page.path
{{ page.path }}

==========================

## Layout
{{ layout | jsonify }}

==========================

## Paginator
{{ paginator | jsonify }}

==========================

## Data (TODO: create data-page)
<nav class="">
    <ul>
      {% for data in site.data %}
        <li>
            {{ data[0] }}: <pre>{{ data[1] | jsonify }}</pre>
        </li>
      {% endfor %}
    </ul>
</nav>
