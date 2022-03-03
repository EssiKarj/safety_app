# Generated by Django 4.0.3 on 2022-03-03 16:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('substance', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('spiking_method', models.CharField(max_length=20)),
                ('incident_place', models.CharField(default=None, max_length=200)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reports', to=settings.AUTH_USER_MODEL)),
                ('substance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reports', to='substance.substance')),
            ],
        ),
    ]