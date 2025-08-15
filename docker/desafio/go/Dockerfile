FROM golang:1.22-alpine AS builder

WORKDIR /app

COPY main.go .

RUN go build -o fullcycle main.go

FROM scratch
COPY --from=builder /app/fullcycle /
CMD ["/fullcycle"]
