from django.shortcuts import render
from . models import *
from rest_framework.permissions import AllowAny
from rest_framework import generics, response, status
from . serializers import *
from django.conf.urls import *
from rest_framework.schemas import SchemaGenerator
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_swagger import renderers




class CampaignListAPIView(generics.ListAPIView):
    serializer_class=CampaignSerializer
    
    def get_queryset(self):
        return Campaign.objects.all()


class CampaignDetailAPIView(generics.GenericAPIView):
    serializer_class=CampaignSerializer
    
    def get(self, request, slug):
        
        query_set=Campaign.objects.filter(slug=slug).first()
        
        if query_set:
            return response.Response(self.serializer_class(query_set).data)
        
        return response.Response('Not found', status=status.HTTP_404_NOT_FOUND)
    
    
class SuscribeToCampaignAPIView(generics.CreateAPIView):
    serializer_class=SubsriberSerializer
    
    def get_queryset(self):
        return Subscriber.objects.all()
    
    
    # all aaid and done
     