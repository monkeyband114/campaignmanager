from django.urls import path
from .views import CampaignListAPIView, CampaignDetailAPIView, SuscribeToCampaignAPIView

urlpatterns = [
    path('campaigns', CampaignListAPIView.as_view(), name="campaigns"),
    path('campaigns/<str:slug>', CampaignDetailAPIView.as_view(), name="campaign"),
    path('subscriber', SuscribeToCampaignAPIView.as_view(), name='subscriber'),
]

