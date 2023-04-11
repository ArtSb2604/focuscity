FROM python:3.10-slim-buster as builder
EXPOSE 80
EXPOSE 443
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
COPY requirements.txt .
COPY manage.py .
COPY /focuscity ./focuscity
COPY /index ./index
COPY /objects ./objects
COPY /templates ./templates
COPY /content/static ./content/static
COPY /users ./users
RUN pip install --upgrade pip && pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt
FROM python:3.10-slim-buster
WORKDIR /app
COPY --from=builder /app/wheels /wheels
COPY --from=builder /app/requirements.txt .
COPY --from=builder /app/manage.py .
COPY --from=builder /app/focuscity ./focuscity
COPY --from=builder /app/objects ./objects
COPY --from=builder /app/users ./users
COPY --from=builder /app/templates ./templates
COPY --from=builder /app/content/static ./content/static
COPY --from=builder /app/users ./users
COPY --from=builder /app/index ./index
RUN pip install --no-cache /wheels/* && python manage.py collectstatic --noinput