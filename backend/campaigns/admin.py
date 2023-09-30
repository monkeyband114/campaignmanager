from django.contrib import admin
from .models import *



class CampaginModelAdmin(admin.ModelAdmin):
    list_display=('title', 'created_at', 'updated_at')
    
    search_fields=('title','description')
    
    list_per_page=10
    
    
class SubscriberModelAdmin(admin.ModelAdmin):
    list_display=('email', 'campaign', 'created_at')
    
    search_fields=('email', 'campaign__title', 'created_at')
    
    list_per_page=2

admin.site.register(Campaign, CampaginModelAdmin)
admin.site.register(Subscriber, SubscriberModelAdmin)