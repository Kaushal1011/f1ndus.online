import re
from urllib.parse import urlsplit
from django.conf import settings
from django.core.exceptions import ImproperlyConfigured
from django.urls import re_path
from django.views.static import serve
from .views import UserCrud, Post, FindPost, UserLogin, ImagePost
from django.urls import path


def static(prefix, view=serve, **kwargs):
    """
    Return a URL pattern for serving files in debug mode.

    from django.conf import settings
    from django.conf.urls.static import static

    urlpatterns = [
        # ... the rest of your URLconf goes here ...
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    """
    if not prefix:
        raise ImproperlyConfigured("Empty static prefix not permitted")
    elif urlsplit(prefix).netloc:
        # No-op if not in debug mode or a non-local prefix.
        return []
    return [
        re_path(r'^%s(?P<path>.*)$' %
                re.escape(prefix.lstrip('/')), view, kwargs=kwargs),
    ]


urlpatterns = [
    path('createuser', UserCrud.as_view()),
    path('post', Post.as_view()),
    path('image', ImagePost.as_view()),
    path("findpost", FindPost.as_view()),
    path('login', UserLogin.as_view())
]
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)
