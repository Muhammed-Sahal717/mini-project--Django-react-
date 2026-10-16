from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer


# @api_view(["GET", "POST"])
# def student_list(request):
#     if request.method == "GET":
#         students = Student.objects.all()
#         serializer = StudentSerializer(students, many=True)
#         return Response(serializer.data)

#     elif request.method == "POST":
#         serializer = StudentSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ModelViewSet for Student

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
